"use client";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; // Import useRouter for navigation
import React, { useContext } from "react";
import {
  HiOutlineHome,
  HiOutlinePower,
  HiOutlineShieldCheck,
  HiOutlineSquare3Stack3D,
} from "react-icons/hi2";
import { UserCourseListContext } from "@/app/_context/UserCourseListContext";
import { useClerk } from "@clerk/nextjs"; // Import useClerk for Clerk functionalities

function SideBar() {
  const { userCourseList } = useContext(UserCourseListContext);
  const { signOut } = useClerk(); // Get the signOut function from useClerk
  const router = useRouter(); // Initialize the router

  const Menu = [
    {
      id: 1,
      name: "Home",
      icon: <HiOutlineHome />,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Explore",
      icon: <HiOutlineSquare3Stack3D />,
      path: "/dashboard/explore",
    },
    // {
    //   id: 3,
    //   name: "Upgrade",
    //   icon: <HiOutlineShieldCheck />,
    //   path: "/dashboard/upgrade",
    // },
    {
      id: 4, // Changed to a unique ID for the Logout item
      name: "Logout",
      icon: <HiOutlinePower />,
      action: async () => {
        await signOut(); // Call signOut
        router.push("/"); // Redirect to 'app/page.jsx' after sign out
      },
    },
  ];

  const path = usePathname();

  return (
    <div className="fixed h-full md:w-64 p-5 shadow-md">
      <Image src={"/logo.ico"} width={70} height={100} />
      <hr className="my-5"></hr>

      <ul>
        {Menu.map((item, index) => (
          <div key={item.id}>
            {item.action ? ( // Check if there's an action defined
              <div
                className={`flex items-center gap-2 text-gray-600 p-3 cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg mb-2`}
                onClick={item.action} // Call the action directly on click
              >
                <div className="text-2xl">{item.icon}</div>
                <h2>{item.name}</h2>
              </div>
            ) : (
              <Link href={item.path} key={index}>
                <div
                  className={`flex items-center gap-2 text-gray-600 p-3 cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg mb-2 ${
                    item.path === path && "bg-gray-100 text-black"
                  }`}
                >
                  <div className="text-2xl">{item.icon}</div>
                  <h2>{item.name}</h2>
                </div>
              </Link>
            )}
          </div>
        ))}
      </ul>
      <div className="absolute bottom-10 w-[80%]">
        <Progress value={(userCourseList?.length / 10) * 100} />
        <h2 className="text-sm my-2">
          {userCourseList?.length} Out of 10 Course created.
        </h2>
        <h2 className="text-xs text-gray-500">
          Upgrade your plan for unlimited course generation.
        </h2>
      </div>
    </div>
  );
}

export default SideBar;
