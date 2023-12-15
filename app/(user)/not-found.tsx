import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      You might have came to a wrong page
      <Link href={"/"}>
        <button className="bg-gray-800 px-5 py-2 text-lg rounded-lg">
          GO Home
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
