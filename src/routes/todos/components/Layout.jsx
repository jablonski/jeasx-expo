import DefaultLayout from "../../Layout";

export default function Layout({ title, description, children = [] }) {
  return (
    <DefaultLayout
      title={title}
      description={description}
      css="/todos/index.css"
      script="/todos/index.js"
    >
      {children}
    </DefaultLayout>
  );
}
