
'use client'

import { BasicLayout } from "@/layouts";

export default function Loading() {
  return (
    <BasicLayout relative>
      <div className="spinner">
        <div className="dot1}"></div>
        <div className="dot2"></div>
      </div>
    </BasicLayout>
  );
}
