import React from "react";
import Link from "next/link";

const Breadcrumb = ({ crumbs }) => {
  return (
    <nav>
      <ul className="flex gap-2 text-gray-400">
        {crumbs.map((crumb, index) => (
          <li key={index}>
            {crumb.path ? (
              <Link href={crumb.path}>{crumb.label}</Link>
            ) : (
              <span>{crumb.label}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
