import { Box, Button } from '@chakra-ui/react';
import Link from 'next/link';

export const DemoBanner = () => (
  <Box bgGradient="to-r" gradientFrom="teal.200" gradientTo="purple.600" width="100%" padding="2" color="white" className="text-center">
    Live Demo of Next.js Boilerplate -
    <Button variant="outline"><Link href="/sign-up">Auth</Link></Button>
  </Box>
);
