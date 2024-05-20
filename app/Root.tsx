import RootWrapper from "./RootWrapper";

function Root({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl-PL">
      <body>
        <RootWrapper>{children}</RootWrapper>
      </body>
    </html>
  );
}

export default Root;
