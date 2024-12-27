'use client';
import React from 'react';
import { redirect, usePathname } from 'next/navigation';

export default function Dashboard() {
  const pathname = usePathname();
  redirect(`${pathname}/home`);
  return <></>;
}
