"use client";

import CompanyLogo from "@/components/dashboard/company-logo";
import DashboardNavigation from "@/components/dashboard/navigation";
import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
	TransitionChild,
} from "@headlessui/react";
import {
	Bars3Icon,
	BellIcon,
	ChevronDownIcon,
	ClockIcon,
	MagnifyingGlassIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { Suspense, useState } from "react";

// function classNames(...classes) {
// 	return classes.filter(Boolean).join(" ");
// }

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<>
			<div>
				<Dialog
					open={sidebarOpen}
					onClose={setSidebarOpen}
					className="relative z-50 lg:hidden"
				>
					<DialogBackdrop
						transition
						className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
					/>

					<div className="fixed inset-0 flex">
						<DialogPanel
							transition
							className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
						>
							<TransitionChild>
								<div className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
									<button
										type="button"
										onClick={() => setSidebarOpen(false)}
										className="-m-2.5 p-2.5"
									>
										<span className="sr-only">Close sidebar</span>
										<XMarkIcon
											aria-hidden="true"
											className="size-6 text-white"
										/>
									</button>
								</div>
							</TransitionChild>

							{/* Sidebar component, swap this element with another sidebar if you like */}
							<div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
								<div className="flex h-16 shrink-0 items-center">
									<CompanyLogo />
								</div>
								<nav className="flex flex-1 flex-col">
									<ul role="list" className="flex flex-1 flex-col gap-y-7">
										<li>
											<DashboardNavigation />
										</li>
									</ul>
								</nav>
							</div>
						</DialogPanel>
					</div>
				</Dialog>

				{/* Static sidebar for desktop */}
				<div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
					{/* Sidebar component, swap this element with another sidebar if you like */}
					<div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
						<div className="flex h-16 shrink-0 items-center">
							<CompanyLogo />
						</div>
						<nav className="flex flex-1 flex-col">
							<ul role="list" className="flex flex-1 flex-col gap-y-7">
								<li>
									<DashboardNavigation />
								</li>
							</ul>
						</nav>
					</div>
				</div>

				<div className="lg:pl-72">
					<div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-xs sm:gap-x-6 sm:px-6 lg:px-8 dark:bg-gray-800 dark:border-gray-600">
						<button
							type="button"
							onClick={() => setSidebarOpen(true)}
							className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
						>
							<span className="sr-only">Open sidebar</span>
							<Bars3Icon aria-hidden="true" className="size-6" />
						</button>

						{/* Separator */}
						<div
							aria-hidden="true"
							className="h-6 w-px bg-gray-900/10 lg:hidden"
						/>

						<div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
							<form action="#" method="GET" className="grid flex-1 grid-cols-1">
								<input
									name="search"
									type="search"
									placeholder="Search"
									aria-label="Search"
									className="col-start-1 row-start-1 block size-full bg-whit dark:bg-gray-800 pl-8 text-base text-gray-900 outline-hidden placeholder:text-gray-400 sm:text-sm/6"
								/>
								<MagnifyingGlassIcon
									aria-hidden="true"
									className="pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-400"
								/>
							</form>
							<div className="flex items-center gap-x-4 lg:gap-x-6">
								<button
									type="button"
									className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
								>
									<span className="sr-only">View notifications</span>
									<BellIcon aria-hidden="true" className="size-6" />
								</button>

								{/* Separator */}
								<div
									aria-hidden="true"
									className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
								/>

								{/* Profile dropdown */}
								<Menu as="div" className="relative">
									<MenuButton className="relative flex items-center">
										<span className="absolute -inset-1.5" />
										<span className="sr-only">Open user menu</span>
										<Image
											alt=""
											src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
											className=" bg-gray-50"
											width={32}
											height={32}
											style={{ objectFit: "contain" }}
											loading="lazy"
										/>
										<span className="hidden lg:flex lg:items-center">
											<span
												aria-hidden="true"
												className="ml-4 text-sm/6 font-semibold text-gray-900 dark:text-white"
											>
												Rick Snackers
											</span>
											<ChevronDownIcon
												aria-hidden="true"
												className="ml-2 size-5 text-gray-400"
											/>
										</span>
									</MenuButton>
									<MenuItems
										transition
										className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
									>
										<MenuItem>
											<a
												href="#"
												className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
											>
												Menu item 1
											</a>
										</MenuItem>
										<MenuItem>
											<a
												href="#"
												className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
											>
												Menu item 2
											</a>
										</MenuItem>
									</MenuItems>
								</Menu>
							</div>
						</div>
					</div>

					<main className="py-10">
						<div className="px-4 sm:px-6 lg:px-8">
							<Suspense fallback={<ClockIcon />}>{children}</Suspense>
						</div>
					</main>
				</div>
			</div>
		</>
	);
}
