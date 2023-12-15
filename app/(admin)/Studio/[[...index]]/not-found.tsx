import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>You might have came to a wrong page</p>
      <Link href={"/Studio/1/1"}>
        <button className="bg-gray-800 px-5 py-2 text-lg rounded-lg">
          GO Studio
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
