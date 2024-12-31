import type { ReactNode } from "react";

export type Language =
	| "C++"
	| "C#"
	| "Rust"
	| "JavaScript"
	| "TypeScript"
	| "Python"
	| "HTML"
	| "CSS"
	| "F#"
	| "R"
	| "Julia"
	| "Ruby"
	| "Swift"
	| "SQL";
export type Platform =
	| "Linux"
	| "Firebase"
	| "Google Cloud"
	| "AWS"
	| "Kubernetes"
	| "Web"
	| "Plotly Dash"
	| "Google Apps Script";
export type Framework =
	| "React"
	| "Svelte"
	| "Next.js"
	| "Qt"
	| "WebSocket"
	| "Vue"
	| "Astro";
export type Technique = "Test-Driven Development" | "Scrum" | "Git";

interface RankingScores {
	impressive: number;
	collaborative: number;
	original: number;
	complex: number;
	algorithmic: number;
}

export interface Project {
	name: string;
	languages: Language[];
	platforms: Platform[];
	techniques: Technique[];
	frameworks: Framework[];
	mediaUrls?: string[];
	tagline: ReactNode;
	description: ReactNode;
	link?: string;
	date: [number, number?];
	rank: RankingScores;
}

const projects: Project[] = [
	{
		name: "Plinq",
		languages: ["HTML", "CSS", "JavaScript"],
		platforms: ["Web"],
		techniques: ["Git"],
		mediaUrls: ["assets/plinq.png"],
		tagline: (
			<>
				A browser extension that helps you track, chronicle, and maintain your
				professional connections
			</>
		),
		description: (
			<>
				I collaborated with a team of 5 members at{" "}
				<a
					href="https://studio.v1michigan.com/"
					target="_blank"
					rel="noreferrer"
				>
					V1 Product Studio
				</a>{" "}
				to design, build, and promote Plinq. Using React, I built an embedded
				sidebar that helps users import contacts from LinkedIn.
			</>
		),
		frameworks: ["Next.js"],
		date: [2022, 2022],
		rank: {
			impressive: 0.65,
			collaborative: 0.9,
			original: 0.55,
			complex: 0.5,
			algorithmic: 0.3,
		},
	},
	{
		name: "CourseKit",
		languages: [
			"C++",
			"C#",
			"F#",
			"HTML",
			"CSS",
			"JavaScript",
			"TypeScript",
			"SQL",
		],
		platforms: ["Web", "Linux", "AWS"],
		techniques: ["Git"],
		mediaUrls: ["assets/coursekit-optimizer.png"],
		frameworks: ["Astro", "React"],
		tagline: (
			<>
				A unified platform that aims to streamline the entire course
				registration process at universities: course selection, schedule
				optimization, and class enrollment
			</>
		),
		description: (
			<>
				When building my first-semester schedule in summer 2021, I wrote a
				program in F# that searched for all possible schedules and sorted them
				according to my preferences. I developed several iterations of the
				optimizer in C++ and ran a successful pilot program in summer 2022 with
				about 50 Michigan students receiving optimal schedules. In winter 2023,
				I collaborated with a team to build and launch a self-serviceable web
				app for schedule optimization using Astro, React, TypeScript, and AWS,
				reaching over 300 users in just one month. I envision adding more course
				selection features and expanding to other universities.
			</>
		),
		link: "https://optimizer.plan.courses",
		date: [2021, null],
		rank: {
			impressive: 0.9,
			collaborative: 0.3,
			original: 0.8,
			complex: 0.7,
			algorithmic: 0.6,
		},
	},
	{
		name: "SillyQL",
		languages: ["C++"],
		techniques: ["Git", "Test-Driven Development"],
		platforms: [],
		frameworks: [],
		tagline: (
			<>
				An optimized in-memory relational database manager with a query syntax
				that resembles SQL
			</>
		),
		description: (
			<>
				I built this database manager in object-oriented C++17 and successfully
				met strict external specifications and performance requirements.
			</>
		),
		date: [2022, 2022],
		rank: {
			impressive: 0.34,
			collaborative: 0.05,
			original: 0.2,
			complex: 0.55,
			algorithmic: 0.45,
		},
	},
	{
		name: "U-M Blue Buses",
		languages: ["Python", "HTML"],
		techniques: [],
		platforms: ["Web", "Plotly Dash", "Google Cloud"],
		frameworks: [],
		date: [2022, 2022],
		mediaUrls: ["assets/mdst-blue-buses.png"],
		tagline: (
			<>
				A data science project that investigates and monitors the reliability of
				campus buses at the University of Michigan
			</>
		),
		description: (
			<>
				I proposed this project topic and led the U-M Blue Buses team at the
				Michigan Data Science Team during Winter 2022. The team aggregated
				millions of rows of position reports from BusTime into Google BigQuery,
				analyzed the position reports in terms of service quality, and
				visualized its findings on a live online dashboard in Plotly Dash.
			</>
		),
		link: "https://www.mdst.club/projects/u-m-blue-buses",
		rank: {
			impressive: 0.65,
			collaborative: 0.7,
			original: 0.4,
			complex: 0.35,
			algorithmic: 0.5,
		},
	},
	{
		name: "COVID-19 Forecasting Model",
		languages: ["R", "HTML", "JavaScript"],
		techniques: ["Git"],
		platforms: ["Web"],
		frameworks: ["Svelte"],
		date: [2020, 2021],
		mediaUrls: ["assets/covid-fit.png", "assets/covid-covariates.png"],
		tagline: (
			<>
				A hybrid COVID-19 transmission model with six compartments and
				predictions of cases, hospitalizations, and deaths from a Recurrent
				Neural Network
			</>
		),
		description: (
			<>
				I ideated, built, and documented a COVID-19 transmission model combining
				mechanistic and statistical approaches from epidemiological literature
				using R, Keras, and Tidyverse. I built a visual tracker of the
				transmission trends of COVID variants in the U.S. when variants first
				proliferated in the U.S. in March 2021.
			</>
		),
		link: "https://capstone.broaderator.com",
		rank: {
			impressive: 0.7,
			collaborative: 0.1,
			original: 0.7,
			complex: 0.7,
			algorithmic: 0.75,
		},
	},
	{
		name: "ARC Attendance Management System",
		languages: ["TypeScript", "HTML", "CSS"],
		techniques: ["Git"],
		platforms: ["Firebase", "Web"],
		frameworks: ["Svelte"],
		mediaUrls: ["assets/ams.png"],
		date: [2020, 2021],
		tagline: (
			<>
				A platform where Andover Robotics Club (ARC) signed up for meeting
				slots, assigned seats, tracked attendance, and could perform contact
				tracing during the 2020-2021 season
			</>
		),
		description: (
			<>
				To help ARC fulfill its logistical requirements during its first season
				under COVID-19, I initiated, built, and deployed the Attendance
				Management System (AMS) using Svelte, Firebase Web, and Firestore. I
				also configured Webhooks to notify the club's Discord server about
				attendance requests and approvals. The club used ARC AMS to manage all
				official in-person meetings during the 2020-2021 season.
			</>
		),
		link: "https://arc-ams.web.app",
		rank: {
			impressive: 0.55,
			collaborative: 0.2,
			original: 0.77,
			complex: 0.3,
			algorithmic: 0.2,
		},
	},
	{
		name: "ARC TeamMaker",
		languages: ["Julia"],
		techniques: [],
		platforms: [],
		frameworks: [],
		date: [2020, 2020],
		mediaUrls: ["assets/teammaker.png"],
		tagline: (
			<>
				A program that optimally assigns members of Andover Robotics Club (ARC)
				to competition teams according to their skills, interests, and
				preferences
			</>
		),
		description: (
			<>
				To ensure that ARC's three competition teams are balanced in strengths
				and educational opportunities, I wrote a program in Julia that, given
				club members' strengths, interests, and preferences, generates an
				optimal team assignment for each member. True team assignments in the
				2020-2021 season were based on this program's output and led every team
				to unprecedented success.
			</>
		),
		link: "https://github.com/Andover-Robotics/TeamMaker",
		rank: {
			impressive: 0.6,
			collaborative: 0.1,
			original: 0.82,
			complex: 0.5,
			algorithmic: 0.67,
		},
	},
	{
		name: "The MassScout Extension",
		languages: ["TypeScript", "HTML", "CSS"],
		techniques: ["Test-Driven Development", "Git"],
		platforms: ["Web"],
		frameworks: ["Vue"],
		date: [2019, 2023],
		mediaUrls: ["assets/massscout.png", "assets/massscout-analyze.png"],
		tagline: (
			<>
				A browser extension that helps FIRST Tech Challenge (FTC) robotics teams
				in Massachusetts collect, share, and analyze other teams' performance
				records
			</>
		),
		description: (
			<>
				I proposed, developed, and deployed this browser extension to replace
				the original, tedious paper-driven system for team performance
				collection used by the MassScout Alliance. The alliance adopted this
				extension as its official data handling method, and 3 of the 4 top teams
				in Massachusetts in 2020 used this extension to evaluate other teams for
				their alliances.
			</>
		),
		link: "https://github.com/MassScout-Alliance/MassScout-Extension",
		rank: {
			impressive: 0.7,
			collaborative: 0.3,
			original: 0.75,
			complex: 0.35,
			algorithmic: 0.45,
		},
	},
	{
		name: "PreMatch",
		languages: ["Python", "HTML", "CSS", "JavaScript", "Ruby", "Swift"],
		techniques: ["Git", "Test-Driven Development"],
		platforms: ["Firebase", "Google Cloud", "Web"],
		frameworks: ["Vue"],
		date: [2018, 2021],
		mediaUrls: [
			"assets/prematch-logo.png",
			"assets/prematch-bot.png",
			"assets/prematch-mobile.png",
		],
		tagline: (
			<>
				A platform that helped Andover High School students see their classmates
				before each school year started and make sense of their schedules on a
				daily basis
			</>
		),
		description: (
			<>
				I co-founded PreMatch and built the backend of PreMatch.org in Python
				and Flask, first storing user data on Google Cloud Datastore and hosting
				the backend on Google App Engine. Along with the web interface, I wrote
				a Discord bot in Ruby that informed hundreds of students about their
				schedule for each school day. I then designed, built, and marketed
				PreMatch for iOS, a mobile app that helped &gt;600 students navigate
				their schedules daily. In summer 2019, PreMatch.org was used by
				&gt;1,100 students to discover their new classmates.
			</>
		),
		link: "https://github.com/PreMatch",
		rank: {
			impressive: 0.85,
			collaborative: 0.5,
			original: 0.7,
			complex: 0.6,
			algorithmic: 0.4,
		},
	},
	{
		name: "csim6502",
		languages: ["C++"],
		techniques: ["Git", "Test-Driven Development"],
		platforms: [],
		frameworks: [],
		date: [2018, 2018],
		tagline: (
			<>
				A complete emulator of the MOS 6502 microprocessor written in
				expressive, clean, and modern C++
			</>
		),
		description: (
			<>
				I strictly followed Google's C++ Style Guide and Test-Driven Development
				to build a complete emulator of the MOS 6502 microprocessor in 2 weeks.
			</>
		),
		link: "https://github.com/broad-well/csim6502",
		rank: {
			impressive: 0.65,
			collaborative: 0.1,
			original: 0.3,
			complex: 0.45,
			algorithmic: 0.25,
		},
	},
	{
		name: "Assembunny+",
		languages: ["Rust"],
		techniques: ["Git"],
		platforms: [],
		frameworks: [],
		date: [2017, 2017],
		tagline: (
			<>
				A transpiler and interpreter for my own Turing-complete programming
				language resembling RISC assembly
			</>
		),
		description: (
			<>
				I invented a primitive programming language whose grammar expanded upon
				the specifications for Assembunny in Advent of Code 2016. I then wrote
				an interpreter for this language and a transpiler that translated it to
				C, both in Rust.
			</>
		),
		link: "https://github.com/broad-well/assembunny-plus",
		rank: {
			impressive: 0.6,
			collaborative: 0.05,
			original: 0.15,
			complex: 0.55,
			algorithmic: 0.35,
		},
	},
	{
		name: "Shifter",
		languages: ["TypeScript"],
		techniques: [],
		platforms: ["Google Apps Script"],
		frameworks: [],
		date: [2023, null],
		tagline: (
			<>
				A Google Sheets add-on that generates optimal work shift assignments
				using linear programming
			</>
		),
		description: (
			<>
				Responding to the work management needs of the Escher Cooperative House
				at the University of Michigan, I wrote a Google Sheets add-on in
				TypeScript that gathers work availability survey responses, formulates
				the construction of a work schedule using this availability data as a
				linear program, and solves the program using{" "}
				<code>LinearOptimizationService</code>. Escher's Work Manager has used
				Shifter to generate its work schedule for 166 house members in Fall 2023
				and Winter 2024.
			</>
		),
		link: "https://broadwell.notion.site/Shifter-Documentation-56aff1ae197544369bb8fcb798d6663c",
		rank: {
			impressive: 0.7,
			collaborative: 0.15,
			original: 0.35,
			complex: 0.3,
			algorithmic: 0.45,
		},
	},
	{
		name: "RecovAir",
		languages: ["Rust", "Python", "TypeScript", "SQL"],
		techniques: ["Git"],
		platforms: ["Web"],
		frameworks: ["React"],
		date: [2023, null],
		tagline: (
			<>An integrated Agent-Based Model for airline disruption recovery</>
		),
		description: (
			<>
				Motivated by the Southwest Airlines scheduling crisis in December 2022,
				I developed a novel agent-based model that simulates aircraft, crew, and
				passengers in a flight network under arbitrary disruptions and ad-hoc
				recovery mechanisms while recording Key Performance Indicators. I then
				used TypeScript, React, and Remix to build a web interface that can
				replay simulations and display recorded Key Performance Indicators over
				time for airline schedulers. RecovAir was featured in a conference paper
				at ICAS 2024 in collaboration with researchers at Michigan, MIT, and
				Harvard. At{" "}
				<a href="https://iwac2024.org" rel="noreferrer" target="_blank">
					IWAC 2024
				</a>
				, RecovAir's paper was nominated for the Best Student Paper Award and
				selected for journal publication in JSASS.
			</>
		),
		link: "https://github.com/broad-well/recovair-abm",
		rank: {
			impressive: 0.8,
			collaborative: 0.3,
			original: 0.3,
			complex: 0.6,
			algorithmic: 0.3,
		},
	},
];

export default projects;
