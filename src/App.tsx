import { SubmitHandler, useForm } from "react-hook-form";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { toast } from "react-toastify";

type FormInput = {
	email: string;
};

function App() {
	const {
		register,
		handleSubmit,
		resetField,
		formState: { errors },
	} = useForm<FormInput>();

	const onSubmit: SubmitHandler<FormInput> = (data) => {
		console.log(data);
		if (data.email === "") {
			toast.error("Please enter your email address");
		}
		resetField("email");
	};

	return (
		<main className="flex flex-col items-center justify-center h-screen font-libreFranklin">
			<img src="/images/logo.svg" alt="" className="md:mt-10" />
			<h1 className="pt-12 pb-4 text-3xl font-light text-neutral-gray">
				We are launching{" "}
				<span className="font-bold text-neutral-veryDarkBlue">soon!</span>
			</h1>
			<p className="pt-2 pb-8 font-thin text-neutral-veryDarkBlue">
				Subscribe and get notified
			</p>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="w-[370px] md:w-[550px] md:flex md:items-center md:justify-center"
			>
				<div className="md:relative md:w-[90%] md:mr-4">
					<input
						type="email"
						placeholder="Your email address..."
						className={`w-full py-3  pl-8 border-2 rounded-full md:mt-[20px] 
              placeholder:opacity-60 focus:outline-none placeholder:text-sm border-opacity-30 
              ${errors.email ? "border-red-500" : ""}`}
						{...register("email", {
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: "Please provide a valid email address",
							},
						})}
					/>
					{errors.email && (
						<p className="mt-2 ml-6 text-sm font-medium text-red-600 md:absolute">
							{errors.email.message}
						</p>
					)}
				</div>
				<button
					type="submit"
					className="w-full hover:opacity-80 py-3 mt-4 md:w-[40%] text-white rounded-full shadow-xl bg-primary-blue"
				>
					Notify Me
				</button>
			</form>
			<img
				src="/images/illustration-dashboard.png"
				alt=""
				className="mt-24 md:w-[500px] w-[370px]"
			/>
			<div className="flex gap-6 mt-40 text-lg md:mt-20 text-primary-blue">
				<div className="p-4 border-2 rounded-full cursor-pointer hover:bg-primary-blue hover:text-white">
					<FaFacebookF />
				</div>
				<div className="p-4 border-2 rounded-full cursor-pointer hover:bg-primary-blue hover:text-white">
					<FaTwitter />
				</div>
				<div className="p-4 border-2 rounded-full cursor-pointer hover:bg-primary-blue hover:text-white">
					<FaInstagram />
				</div>
			</div>

			<footer className="mt-10 text-xs">
				<p className="flex flex-col text-neutral-gray">
					© Copyright Ping. All rights reserved.
				</p>
			</footer>
		</main>
	);
}

export default App;
