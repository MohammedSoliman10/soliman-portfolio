// Edit this file to change what shows up on the site.

export const profile = {
  name: "Mohammed Soliman",
  firstName: "Mohammed",
  lastName: "Soliman",
  title: "Fullstack Web3 Developer",
  bio: "I write Solidity contracts with Foundry, test them hard, and ship React frontends that people can use today on Sepolia. Based in Cairo.",
  email: "mohammedsolly4@gmail.com",
  location: "Cairo, Egypt",
  socials: {
    github: "https://github.com/MohammedSoliman10",
    linkedin: "https://linkedin.com/in/mohammed-soliman05",
    x: "https://x.com/MohammedSolly05",
    medium: "https://medium.com/@mohammedsolly4",
  },
};

export const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  liveLabel?: string;
  repoUrl: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Tokenized Vault",
    description:
      "An ERC-4626-style vault. Deposit a token, get non-transferable shares priced by vault balance, and withdraw anytime. Includes a 24-hour faucet cooldown, a live activity feed and a custom wallet modal.",
    tags: ["Solidity", "Foundry", "React", "TypeScript", "wagmi", "viem"],
    liveUrl: "https://tokenized-vault.vercel.app",
    repoUrl: "https://github.com/MohammedSoliman10/tokenized-vault",
    featured: true,
  },
  {
    title: "Token Vesting",
    description:
      "Grantors lock ERC-20 tokens behind a cliff and 90-day release intervals. Beneficiaries track progress on a dashboard and claim what has vested. Backed by 62 Foundry tests and a written security review.",
    tags: ["Solidity", "Foundry", "React", "wagmi", "RainbowKit"],
    liveUrl: "https://token-vesting-lyart.vercel.app",
    repoUrl: "https://github.com/MohammedSoliman10/TokenVesting",
    featured: true,
  },
  {
    title: "Dutch Auction",
    description:
      "Sellers mint an NFT and list it at a price that falls every second. Buyers settle in one atomic transaction that pays, transfers the NFT and refunds any overpay.",
    tags: ["Solidity", "ERC-721", "IPFS"],
    liveUrl: "https://dutch-auction-mu.vercel.app",
    repoUrl: "https://github.com/MohammedSoliman10/dutch-auction",
  },
  {
    title: "English Auction",
    description:
      "A full NFT auction lifecycle: escrow, strictly rising bids, permissionless settlement and refunds for outbid users. The UI is deliberately monochrome. 49 Foundry tests.",
    tags: ["Solidity", "Foundry", "React"],
    liveUrl: "https://english-auction-nine.vercel.app",
    repoUrl: "https://github.com/MohammedSoliman10/english-auction",
  },
  {
    title: "Crowdfund",
    description:
      "Backers pledge, withdraw or claim refunds on failed campaigns. Creators launch and claim funds on success. Wrapped in a retro Windows 95 desktop UI.",
    tags: ["Solidity", "ERC-20", "React"],
    liveUrl: "https://crowdfund-soliman11.vercel.app",
    repoUrl: "https://github.com/MohammedSoliman10/crowdfund",
  },
  {
    title: "Escrow",
    description:
      "A factory deploys one funded escrow per deal. Funds go to the seller when buyer and seller both approve, and an arbiter settles disputes. 25 Foundry tests.",
    tags: ["Solidity", "Foundry", "React", "wagmi"],
    repoUrl: "https://github.com/MohammedSoliman10/escrow-smart-contract",
  },
  {
    title: "Soliman Web3 NFT",
    description:
      "An owner-minted ERC-721 built on OpenZeppelin, with metadata and images pinned to IPFS. Deployed and verified on Sepolia Etherscan.",
    tags: ["Solidity", "ERC-721", "IPFS"],
    liveUrl:
      "https://sepolia.etherscan.io/address/0xc7f4550699371eabbc1b5b0aaf00007a0c46bcd5",
    liveLabel: "On Etherscan",
    repoUrl: "https://github.com/MohammedSoliman10/erc721-foundry-soliman-nft",
  },
  {
    title: "ERC-20 Token dApp",
    description:
      "A capped, burnable, pausable token with role-based access and gasless EIP-2612 permits. 46 unit and fuzz tests, plus a React dApp to use it.",
    tags: ["Solidity", "OpenZeppelin", "wagmi", "RainbowKit"],
    liveUrl: "https://erc20-token-dapp.vercel.app/",
    repoUrl: "https://github.com/MohammedSoliman10/erc20-token-dapp",
  },
];

export const techStack = [
  { group: "Smart contracts", items: ["Solidity", "Foundry", "OpenZeppelin", "UUPS proxies", "EVM"] },
  { group: "Frontend and Web3", items: ["React", "TypeScript", "Next.js", "wagmi", "viem", "Tailwind CSS"] },
  { group: "Tools", items: ["Git and GitHub", "Vercel", "IPFS", "Etherscan"] },
];
