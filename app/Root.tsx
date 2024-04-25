import Header from "@/components/Header/Header.component";
import HeaderBar from "@/components/HeaderInfoBar/HeaderBar";
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
            <HeaderBar />
            <Header />
            {children}
          </RootWrapper>
        </body>
      </html>
    </ReactQueryProvider>
  );
}

export default Root;
