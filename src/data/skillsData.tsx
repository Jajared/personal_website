import { AwsIcon, CssIcon, DjangoIcon, DockerIcon, FigmaIcon, FirebaseIcon, GithubIcon, HtmlIcon, JavaIcon, JavascriptIcon, LangchainIcon, MongoDbIcon, NestJsIcon, NextJsIcon, NodeJsIcon, OpenAIIcon, PostgresqlIcon, PrismaIcon, PythonIcon, ReactIcon, RedisIcon, SupabaseIcon, TailwindCSSIcon, TypescriptIcon } from "../components/DevIcons";
import { SkillsItemData } from "../utils/types";

export const skillsData: SkillsItemData[] = [
  { name: "React / React Native", Icon: ReactIcon, type: "Frontend" },
  { name: "Next.js", Icon: NextJsIcon, type: "Frontend" },
  { name: "HTML", Icon: HtmlIcon, type: "Frontend" },
  { name: "CSS", Icon: CssIcon, type: "Frontend" },
  { name: "Tailwind CSS", Icon: TailwindCSSIcon, type: "Frontend" },
  { name: "Node.js", Icon: NodeJsIcon, type: "Backend" },
  { name: "Nest.js", Icon: NestJsIcon, type: "Backend" },
  { name: "Django", Icon: DjangoIcon, type: "Backend" },
  { name: "Prisma", Icon: PrismaIcon, type: "Backend" },
  { name: "PostgreSQL", Icon: PostgresqlIcon, type: "Backend" },
  { name: "Firebase", Icon: FirebaseIcon, type: "Backend" },
  { name: "MongoDB", Icon: MongoDbIcon, type: "Backend" },
  { name: "Supabase", Icon: SupabaseIcon, type: "Backend" },
  { name: "TypeScript", Icon: TypescriptIcon, type: "Languages" },
  { name: "Javascript", Icon: JavascriptIcon, type: "Languages" },
  { name: "OpenAI", Icon: OpenAIIcon, type: "AI/ML" },
  { name: "Langchain", Icon: LangchainIcon, type: "AI/ML" },
  { name: "Python", Icon: PythonIcon, type: "Languages" },
  { name: "Java", Icon: JavaIcon, type: "Languages" },
  { name: "AWS Certified Cloud Practitioner", Icon: AwsIcon, type: "Tools" },
  { name: "Github", Icon: GithubIcon, type: "Tools" },
  { name: "Figma", Icon: FigmaIcon, type: "Tools" },
  { name: "Docker", Icon: DockerIcon, type: "Tools" },
  { name: "Redis", Icon: RedisIcon, type: "Tools" },
];
