import { Button, RenderlesskitProvider } from "@renderlesskit/react-tailwind";

import { theme } from "../renderlesskit.config";

export default function Home() {
  return (
    <RenderlesskitProvider theme={theme}>
      <div className='flex items-center min-h-screen'>
        <div className='max-h-full p-4 m-auto'>
          <div className='flex flex-col space-y-4'>
            <Button size='sm' variant='solid'>
              I am a sm solid Button
            </Button>
            <Button size='md' variant='subtle'>
              I am a md subtle Button
            </Button>
            <Button size='lg' variant='outline'>
              I am a xl outline Button
            </Button>
            <Button size='xl' variant='ghost'>
              I am a lg ghost Button
            </Button>
            <Button size='xxl' variant='tertiary'>
              I am extended xxl tertiary Button
            </Button>
          </div>
        </div>
      </div>
    </RenderlesskitProvider>
  );
}
