import { fontFamily } from 'theme/typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import ListItem from './list-items/ListItem';
import CollapseListItem from './list-items/CollapseListItem';
// import Image from 'components/base/Image';
import IconifyIcon from 'components/base/IconifyIcon';
// import LogoImg from 'assets/images/logo.png';
import sitemap from 'routes/sitemap';

const DrawerItems = () => {
  return (
    <>
      <Stack
        pt={5}
        pb={4.5}
        px={4.5}
        position="sticky"
        top={0}
        justifyContent="flex-start"
        borderBottom={1}
        borderColor="info.main"
        zIndex={1000}
      >
        <ButtonBase component={Link} href="/" disableRipple>
          {/* <Image src={LogoImg} alt="logo" height={52} width={52} sx={{ mr: 1.75 }} /> */}
          <Typography
            variant="h3"
            textTransform="uppercase"
            letterSpacing={1}
            fontFamily={fontFamily.poppins}
          >
            Horizon
          </Typography>
        </ButtonBase>
      </Stack>

      <List component="nav" sx={{ mt: 2.5, mb: 10, px: 4.5 }}>
        {sitemap.map((route) =>
          route.items ? (
            <CollapseListItem key={route.id} {...route} />
          ) : (
            <ListItem key={route.id} {...route} />
          ),
        )}
      </List>

      <Box mt="auto" px={3} pb={6}>
        <Button variant="text" startIcon={<IconifyIcon icon="ic:baseline-logout" />}>
          Log Out
        </Button>
      </Box>
    </>
  );
};

export default DrawerItems;
