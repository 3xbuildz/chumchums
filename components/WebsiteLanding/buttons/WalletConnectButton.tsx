"use client"

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { IoMdWallet } from 'react-icons/io';
import wallet from "@/assets/WebsiteLanding/logos/wallet.png"
import Image from 'next/image';

export const WalletConnectButton = () => {
  return (
    <div className='block text-white'>
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');
        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button onClick={openConnectModal} type="button" className='text-white font-bold rounded-full hover:-translate-y-1 px-3 py-1 transform transition duration-200 ease-in-out flex items-center justify-center flex-col gap-0'>
                    <Image src={wallet} alt="stickerGen" className='w-10'/>
                    <h3 className='max-md:hidden'>Connect</h3>
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button" className='text-white bg-red-500 hover:bg-red-400 font-bold rounded-full hover:-translate-y-1 px-3 py-1 transform transition duration-200 ease-in-out flex-col flex items-center justify-center gap-2'>
                    Wrong network
                  </button>
                );
              }
              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  
                  <button title='Click to view address' onClick={openAccountModal} type="button" className='flex flex-col font-bold hover:-translate-y-1 duration-200 items-center gap-0 justify-center text-white rounded-full max-md:text-md text-sm px-3 py-1 transform transition '>
                    <Image src={wallet} alt="stickerGen" className='w-10'/>
                    {account.displayBalance
                      ? ` ${account.displayBalance}`
                      : ''}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
    </div>
  );
};