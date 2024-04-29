import RootWrapper from "./RootWrapper";
import ReactQueryProvider from "./ReactQueryProvider";

function Root({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <html lang="pl-PL">
        <body>
          <RootWrapper>
            {children}
          </RootWrapper>
        </body>
      </html>
    </ReactQueryProvider>
  );
}

export default Root;
