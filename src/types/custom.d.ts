declare module "*.svg" {
  import * as React from "react";
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const content: string;
  export { ReactComponent };
  export default content;
} 

declare module '@ap.cx/react-fullpage';
declare module 'react-page-scroller';
declare module 'react-icons/*';  
