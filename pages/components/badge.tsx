import * as React from "react";
import { useRouter } from "next/router";
import { Badge } from "@renderlesskit/react-tailwind";

const BadgeComp = () => {
  const router = useRouter();
  const props = router.query;

  return (
    <div className='flex items-center min-h-screen'>
      <div className='max-h-full p-4 m-auto'>
        <div className='flex flex-col space-y-4'>
          <Badge {...props}>Beta</Badge>
        </div>
      </div>
    </div>
  );
};

export default BadgeComp;
