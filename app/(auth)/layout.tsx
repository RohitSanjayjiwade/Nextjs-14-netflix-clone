

export default function AuthLayout({ children }
	: {
		children: React.ReactNode;
	}) {
	return (
		<div className="relative flex h-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
			{children}
		</div>
		);
}



// border-2 border-gray-300