export interface Project {
	name: string;
	description: string;
	href: string;
}

export const aboutParagraphs = [
	"I've always been drawn to the intersection of design and code. I was designing interfaces in code before I even knew what UI/UX design was. Discovering Figma opened up a whole new side of the craft, but bringing a design to life in the browser is still my favorite part.",
	"I love designing and building beautiful, fast marketing websites. I've spent years creating independent projects and have also worked professionally as a software engineer in fintech. Now I'm looking to join a creative agency where I can work on real client projects, learn from other designers and developers, and continue growing as a design engineer.",
] as const;

export const projects = [
	{
		name: 'stillroom',
		description:
			'A custom marketing website for a hospitality branding studio, featuring a CMS-managed portfolio and journal.',
		href: 'https://stillroom-app.netlify.app',
	},
	{
		name: 'bassment',
		description:
			'An immersive underground drum & bass venue website featuring artist lineups, events, and ticket purchasing.',
		href: 'https://clubbassment.com',
	},
	{
		name: 'marsh & ember',
		description:
			'A refined restaurant website featuring seasonal menus, reservations, and private dining experiences.',
		href: 'https://marshandember.netlify.app',
	},
] as const satisfies readonly Project[];

export const contactLinks = {
	github: 'https://github.com/charley81',
	email: 'mailto:charley81@gmail.com',
} as const;
