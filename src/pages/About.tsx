import React, { FC } from 'react'

const About: FC = () => {
	return (
		<div className='flex flex-col gap-4 justify-center content-center pt-[20%] px-2 max-w-3xl mx-auto'>
			<h1 className='font-bold text-3xl'>About me</h1>
			<p>
				I have always liked apps, interacting with interfaces, keeping them
				updated and how they get new functionality. I started to study UX/UI
				more deeply. In May 2021, I decided to change my profession. At first I
				was trained in the field of graphic design, after finishing the courses
				I started learning JavaScript / TypeScript. Now, as a self-development,
				I am reading the book Clean Code by Robert Martin. I regularly create
				pages using Tailwind CSS and Bootstrap.
			</p>
			<p>
				Since 2022 I have been working for the company on a commercial project.
				I have experience of communication with English-speaking colleagues.
				Most of the time I worked with TypeScript and JavaScript, learning OOP
				principles in practice and the value of being able to work in a team. I
				constantly improve my professional skills (follow the latest updates in
				the field, read books and articles, practice).
			</p>
			<div>
				<span className='font-bold'>Soft skills:</span>
				<ul>
					<li>- time management</li>
					<li>- detail orientation</li>
					<li>- ability to set priorities</li>
					<li>- team work</li>
					<li>- fast-learner</li>
					<li>- organised</li>
					<li>- responsible</li>
				</ul>
			</div>
			<div>
				<span className='font-bold'>Language:</span>
				<ul>
					<li>- Russian - Native </li>
					<li>-- English - B1 - Intermediate</li>
				</ul>
			</div>
		</div>
	)
}

export default About
