import { Button } from "@renderlesskit/react-tailwind";

export default function Home() {
  return (
    <>
      <Button size='xs' variant='primary' className='m-10'>
        I am a xs primary Button
      </Button>
      <Button size='sm' variant='secondary' className='m-10'>
        I am a sm seconday Button
      </Button>
      <Button size='md' variant='link' className='m-10'>
        I am a md link Button
      </Button>
      <Button size='lg' variant='primary' className='m-10'>
        I am a md link Button
      </Button>
      <Button size='xl' variant='tertiary' className='m-10'>
        I am a xl tertiary Button
      </Button>
    </>
  );
}
