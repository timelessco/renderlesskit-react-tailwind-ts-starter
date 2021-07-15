import * as React from "react";
import { useRouter } from "next/router";
import { Button, ClockIcon, CaretRightIcon } from "@renderlesskit/react-tailwind";

const ButtonComp = () => {
  const router = useRouter();
  const { other, ...queries } = router.query;
  console.log("%c other", "color: #1d5673", other);
  console.log("%c queries", "color: #00b300", queries);

  const props = {
    ...queries,
    iconOnly: other === "iconOnly" && <ClockIcon />,
    prefix: (other === "prefix" || other === "both") && <ClockIcon />,
    suffix: (other === "suffix" || other === "both") && <CaretRightIcon />,
    loading: other === "loading" && true,
    disabled: other === "disabled" && true,
  };

  return (
    <div className='flex items-center min-h-screen'>
      <div className='max-h-full p-4 m-auto'>
        <div className='flex flex-col space-y-4'>
          <Button {...props}>Continue</Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonComp;
