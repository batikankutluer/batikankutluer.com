"use server";

interface HomeProps {
  children?: React.ReactNode;
}

async function Home({ children }: HomeProps) {
  return <>{children}</>;
}

export { Home };
