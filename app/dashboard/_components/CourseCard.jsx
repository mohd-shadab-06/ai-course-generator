import Image from "next/image";
import React from "react";
import { HiMiniEllipsisVertical, HiOutlineBookOpen } from "react-icons/hi2";
import DropdownOption from "./DropdownOption";
import { db } from "@/configs/db";
import { CourseList } from "@/configs/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";

function CourseCard({ course, refreshData, displayUser = false }) {
  const handleOnDelete = async () => {
    const resp = await db
      .delete(CourseList)
      .where(eq(CourseList.id, course?.id))
      .returning({ id: CourseList?.id });

    if (resp) {
      refreshData();
    }
  };
  return (
    <div className="shadow-sm rounded-lg p-2 cursor-pointer mt-4 border">
      <Link href={"/course/" + course?.courseId}>
        <Image
          src={course?.courseBanner}
          width={300}
          height={200}
          className="w-full h-[200px] object-cover rounded-lg hover:scale-105 transition-all cursor-pointer"
        />
      </Link>
      <div className="p-2">
        <h2 className="font-medium text-lg flex justify-between items-center">
          {course?.courseOutput?.course?.name}

          {!displayUser && (
            <DropdownOption handleOnDelete={() => handleOnDelete()}>
              <HiMiniEllipsisVertical />
            </DropdownOption>
          )}
        </h2>
        <p className="text-sm text-gray-400 my-1">{course?.category}</p>
        <div className="flex items-center justify-between">
          <h2 className="flex rounded-sm gap-2 items-center p-1 bg-purple-50 text-primary text-sm">
            <HiOutlineBookOpen />
            {course?.courseOutput?.course?.noOfChapters} Chapters
          </h2>
          <h2 className="text-sm bg-purple-50 text-primary p-1 rounded-sm">
            {course?.level} Level
          </h2>
        </div>
        {/* <div>
          <Image src={course?.userProfileImage} width={70} height={70} />
        </div> */}
        {displayUser && (
          <div className="flex gap-2 items-center mt-2">
            {course?.userProfileImage ? (
              <Image
                className="rounded-full mt3"
                src={course.userProfileImage}
                width={20}
                height={20}
                alt="User Profile"
              />
            ) : (
              <div className="w-[20px] h-[20px] mt3 bg-gray-200 rounded-full"></div>
            )}
            <h2 className="text-sm">{course?.userName}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseCard;
