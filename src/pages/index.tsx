import { HeaderMiddle } from '@/components/Templates/Header';

import Link from '@/const/const.json';

const links = Link.links;

const Home = (): JSX.Element => {
  return (
    <>
      <HeaderMiddle links={links} />
    </>
  );
};

export default Home;
