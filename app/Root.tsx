import Header from "@/components/Header/Header.component";
import HeaderBar from "@/components/HeaderInfoBar/HeaderBar";
import RootWrapper from "./RootWrapper";

function Root({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl-PL">
      <body>
        <RootWrapper>
          <HeaderBar />
          <Header />
          {children}
        </RootWrapper>
      </body>
    </html>
  );
}

export default Root;
