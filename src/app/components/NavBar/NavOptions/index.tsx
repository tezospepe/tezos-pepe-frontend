import styled from "styled-components";
import { NavPage } from "../types";
import { Dropdown, NavItem, NavItemContainer } from "./styles";
import { StyleConstants } from "src/styles/style-constants";

export const NavContent = styled.div`
  height: ${StyleConstants.NAV_BAR_HEIGHT};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`

export const NavOptions = () => {
  const pages: NavPage[] = [
    {
      url: '#',
      name: 'Farm',
      alt: 'Farm',
      subpage: [
        {
          url: 'https://crunchy.network/',
          name: 'Crunchy',
          alt: 'Crunchy Network',
        },
        {
          url: 'https://matterdefi.xyz/#/?live=30',
          name: 'Matter',
          alt: 'Matter Farms',
        }
      ],
    },
    {
      url: '#',
      name: 'Buy',
      alt: 'Buy',
      subpage: [
        {
          url: 'https://crunchy.network/#/swap?from=tez&to=KT1MZg99PxMDEENwB4Fi64xkqAVh5d1rv8Z9_0',
          name: 'Crunchy',
          alt: 'Crunchy Network',
        },
        {
          url: 'https://spicyswap.xyz/#/swap',
          name: 'SpicySwap',
          alt: 'SpicySwap',
        },
        {
          url: 'https://3route.io/swap',
          name: '3Route',
          alt: '3Route',
        },
        {
          url: 'https://app.plenty.network/swap?from=XTZ&to=PEPE',
          name: 'Plenty',
          alt: 'Plenty Network',
        }
      ],
    },
    {
      url: 'https://tezos-homebase.io/explorer/dao/KT1LyPqdRVBFdQvhjyybG5osRCXnGSrk15M5/overview',
      name: 'DAO',
      alt: 'DAO',
    },
  ];

  return (
    <NavContent>
      {pages.map((page, index) => (
        <NavItemContainer key={`c-${index}`}>
          <NavItem
            href={page.url}
            target="_blank"
            title={page.alt}
            rel="noopener noreferrer"
          >
            {page.name}
          </NavItem>
          
          {page.subpage && (
            <Dropdown>
              {page.subpage.map((subpage, index) => (
                <NavItem href={subpage.url} key={`sp-${index}`}>{subpage.name}</NavItem>
              ))}
            </Dropdown>
          )}
        </NavItemContainer>
      ))}
    </NavContent>
  );
}