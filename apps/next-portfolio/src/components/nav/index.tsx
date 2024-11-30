"use client";

import { useId, useRef } from "react";
import type {
  ButtonHTMLAttributes,
  FunctionComponent,
  HTMLAttributes,
  ReactNode,
} from "react";
import cx from "clsx";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { Person } from "@repo/generated";
import { navStyles as styles } from "@repo/shared-styles";
import DarkModeToggle from "~/components/dark-mode-toggle";
import Hamburger from "~/components/hamburger";
import { Link } from "~/components/progress-bar/next";
import useClickOutside from "~/hooks/use-click-outside";
import { cn } from "~/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  open: boolean;
  profilePic: Person;
  onClose: () => void;
  onExpandCollapse: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
}

const Nav: FunctionComponent<Props> = ({
  children,
  open,
  profilePic,
  onClose,
  onExpandCollapse,
  ...props
}) => {
  const id = useId();
  const container = useRef<HTMLDivElement>(null);

  useClickOutside(container, () => {
    onClose();
  });

  return (
    <div className={styles.container} ref={container} {...props}>
      <Link
        href="/#home"
        className="inline-flex items-center border-2 border-transparent shadow-sm outline-none focus:border-yellow-500 lg:mb-4 lg:mr-0 lg:rounded-full lg:border-8 lg:border-sky-700"
      >
        <Image
          src={profilePic?.image?.url as string}
          className="aspect-square w-10 rounded-full object-cover lg:w-48"
          height={192}
          width={192}
          alt={profilePic?.image?.description as string}
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRnANAABXRUJQVlA4IGQNAABwigCdASqQAZABP3Gwz2C/v7+/JVNbU/AuCWduxMjlAOfmjlBAKqd4C9Hdc/ZyE9xH/a8g/xj+1yYhMPt/l92bzEJC7O3+uIn0KNHkqey8Jn95oaEX1PTYUgBS5tAAGijHsXpb2/qv9dUZVdU8j74+KJuueJ6XY0O0rJSNdSqOmDq3nEhvAAOoM7L4bs/OZ6AI8KfJxpCBFQOj5zsWsPt03K2BnwsI4twXhKrQIUgNMTBJq2PgnEZLXnZoj/A9RCvYalBjcqHKaqiFqoex8VhA2iUj+eZmgaBJSpNzV/hZJIAAG5Pe0vnwAjI9WUQ3RCdfnHTKhPYE+9WbfrUsGtYO/7MftMvTWq+VGWs4NtN7CIT+fk+2Y5qtYV9AQ3TCIrJjMSP1b+UEj6cF3DqQHA2mCKj5pX5b3qxHTo6atpLW1J9+qj3ZC5X9gK33y7BGe41VwpAQP7FjhZ2pX+eLaEwTtSrn/NsBbMvhR9SFGgv1cOGzDPTEZmL+W3I3uKl1eQrHg1qaGWH5zJTMRMmF3uu/O6GBQWCCa0TepXvNLkBjab9zC34lSZKq8XBZ2jg3RUhbxyaVmN0DzxVdT0IJKT5ri8+sKyPqZZoJksFiXxMTMizoIoAFDXvfi/dzTK3k3Z+JMc5qLj+7crx+VY7rDrb13Hz+5rAogisQCZiMtj4K1TY7u8n1zZ8Ubgytzy5+hKLm3tBPKsWiwUEmcwVsaJVqg7I74fnphSa4hp8pwUxYx3Th68e03sOzTFANJpnPqfkNbTQ67NtT/Xb1f/j9b64iZVAmwzUTLDxj81/4QvgdZsrKd684vlhX4ky05DvfoJmh0EakOBEyNEh2GKIgWkxW/eltuETMtyg9laKv3wpC58Hf4tXH/qjMvsvuB/u0mtVhyFgW6Op9dP9m8EOUHEfhz4xu6ib2Rx4gUYMeDwlf0VYLe3w3d6DRxwu0cUgYq/NvyRNH/+69JBHKDyPtk28umm8SdUuIefLhkuKfQRMHDqlxpcpUrH5zXdMKaFq0qTAzJyJjPrNIY3/6+RUtRgxvWmIj1XyJifgOMkjMq7AO9DvKCgmunoChHvD6Hw6Qao/F/p55VP/F0ps1Nxfei5uq6X5WPRRtJqDpexiAiqHrDLPC6DFYuHSO2NdIErDDqB7PAXcKvn8SVnkMM2z2J4bRrqZJvLYUlRT6aAYCotToEXpCdUxTPyLkq08VPKBqtNeQ9tsVguHloXjOr8DIkoGOd88VhNa0v2o5Rr370Tl1jbRD2vli26ypEckKF4dspYRFC2iEXVn/23yZhXy1BUxI87qYug+qY+9pqf0WtpPreFAdPTp6zVdBSIRd55D9BBK3ulXGlT8/5IGv/7pWzEHMu4he7mSIihWE32SR1wfNwJfQy3KzzFa5cCs28nrZxPoiW2zSSNhM+mkxB/AwAx3QxzaXON2TgHvvuM3mBsP4a9qXfx13PnsX2xn5OzUQpuh1KiLHU+1ziskyCvAA/b0xqKi4uyEPSIGPEruUnceDCr8DMAsZMOim8GPcFBFYZEUj3uV12wAuKKJDMOIfoaZS7aaWkvuqvwoAsKM2q0hHjBYIBkQC1QaIVP5AZyXlhYRhkfS/4xhlS4acA3A5plQxyAfu7/UL8pGVnhgCFnLxYhX6K+5qM22rN7LvRX1pBS7BnuGl1XPnSDcEiE7zbiSBHjyXODxYXmtIanBZGAFCVUcLqzSniaxLg482fjjrTGTwwWfEPToD3/2lPl1nLiv9BntZJIKmL12QN01Mgaef1cjKK4VP6BLxPBWrqCyf/rQvZpaFG1ahdZs64bpvb7/Wtbdkv/vSiqKMKAZnkbpFpLIJeYXXRUL0teuATV9Ph2ncKXRGv2zPHNt2WFz26wdEFxs4mocf96ICTSaTqEvBR/I17iwhwDMRP+nww0AVDn9DDILSx2H6CWLQeZCJv/xod/ckVQXft+XZJ14HPgjpWFxIAz+t72EuheyB+H11pCNJ2EGrbjPfTQdLZRwEI0UYuDLBrwVobESdduX7hygcD2M/uvYn7MdQYKr976iQqltU5URr+lOQWWsJt96zf8krv1zzSqpsBIQh9QLDQG++noVwXqiEl27aHl3M9GX+WzH4bTmkuJo8n2Y36IK+li2SVskJTmsgS2RkvsakjVzQsCSt9HjWaDef/Hy8Pc/2n73n/q7Dvp31ZI9iZ93oj+qehQsPBj1CyIGMH0i0v9vvRxGchICcYao8FBQ3VB2AZY7Xh3Hij0aKSzi6RbaTV0PpdIYVkrZZ30PSwv79MLlpcMuhHOfJOju8xBeALYQQfvuvbzvqx0Or+6TTsJEp7lOMsoUx5ZGmoQ2S1GmKgB88JYf7RnnF7ETN1AEkknJTWMP/ZrBimp3rf0s2RoTPKbhafEOrj01N1bVgxA6S7RpppGv9qPapSNxGfC3L8HuMln3/pEisEXjMux1pCwRHgvhT+hpA5DSVGZJ1AFBe3yz4OOyORMTokK/vmaq9Z4/sdxr0RYUYwgNIkpXLUwVpJ7O159J4oQv4FDbS2lhqIXQsBW0DIOvXtgw7wGrBq0zbKq0RB7aHXCXpl+wUi53Y2W8r4c330JMJGOVOFVRQL/vwzK0p/DemBlVmrxaHTho+678EDbj8GT5eCgkUImPEG/X47QOC2YDnosp4PgS41FeO6mhrncB7NBmhCGVEJ8RlE/KVBb8/Qf5KTBeSqyAuMaBlOaBQEykShlViaPJLv6SQFSCQx2Si0ILrQplpodUNwXhlE09yTv6LUl9fz7uKzqFrgdL00WbV2BQvG9Xr1yrb0cHZSdTbIiGzv6MqiokXrQxM8fnweL0geFLTWBssDaem22lfNuGYbb25aSUXhWucLysRGC12JY+DbBiWH4v+4nIvJQRJ8YQfUyLA1CfWpM7HsjiZITaHb123G00YjrA8Mxdp6zb5wQ5/ZPMpiJS+M36gelvU/lSus+7sVysDDR7YiqVHlm/7HZK2wQ8swkaApN6f9k5mZlE+SkvJ/NAv+mDsUouZpsoiF9UopikbLlynamf7kUIoVWTLLeDS62nD1ZwPzFGQzD0gteNXIMDCP2b1+WCoI2Nm4o7gacUZ9aBkHvGOoAL0GdSjFOf2hDJnS69M4fwkbsJGjW97JgJLADRWqJRLBt64PaWgbdubrIIu55Jsw7BKX26LBBohRYlwmR36qQmgAHcXhWXrGA9c7zrJ9Tf0qzrNqORe/x1N9noUsgxUqPjXd46etytg4Ph5Zkjw/UNWv9Shhs6wEmG4WXBti8hdMendio26Znjfg9iEaes4gjdcJ6c2Ow0X2sbC7rles2uRGPWy/9aaz0lWLRKLOAAfRxuciVLo/DhN61z9qL28VvjWxgI6R3PTYtiYGKGzNWAmttYDwpaBo1JrkcwMyxJlbCaXBWIbry7j3FUGX0F5W4wSDac5oKfLLQ+rmMSShCCnyi2RLPE38FqQ1Dfen0ahjDvlxPL/fV8S2iJRnxi1BpvKTOBO2spnFm/8uhEeAPwOHf+rlTtc3oVYkxxKRUf4z3yDM8PnuQxRf3tPutDiORUlfAV992/28a8mowirR7EM+6gN9a56nTf/g3Qx9lwIh5ysehhS3w/UIg4D1IAWWxyuRa4P3yu1SjBs28nuIpHFl3wfITfi21KxbSbO0gF97FNsBAFg2uoxxa5v8pEJIo8tZsNbluSYoweB4x2wELmCm29PAYrZnv6k/S3D93jSNETZ8pnEXoaMoUDT/0Gtx5o9Mxsx54v/PWgkqDLiDGOFYAtOoOOusS76oVWisHsG9cCOg8PnNzF3mxIqHX3GQ0xaDQXg4iXBf1WGSHBP1KYYKC2G7MCiYNBmcg46RJ3YzlScvBwa7VegcXSY/iGqcAIrxAIsYn+lqmM7bDGDb1PvF18MJBrvxVf2FrmRZVOIt2fD0SKhKyvHpNYfU5DnI1bWUuLsSAlskMfopZiqCZDU5ds1YCyGbr/kNWwrndaCrY7UCujNeJj8QsEsqR0rG06b+1JjO1FJNdagS3i1Ooiox5CZI2IQQ26QSCh+JCwxBpH92hpOGToZPUdy3fgQjQSumxO6E9KrsCtDn3g8PLF6qxI6TH70XJgl+ethqztHx4UOX86XRwZx3AGkFDQoWKvN1nxE97bQS8Ek6CR8JBC1nS1eFrNUwSfgVKJmL42wC/vEmQjPd56HL7dG7imY67GCcK+4S13eJAhlit6a8zV9By/A2/+UjYhhv7UZbakmyrjqkzbwp2t12/dzF13pJPm93WC9Hbu5eS5OqLB5wdYdcb6+6kYgmcyL/LtvDCmTNu4MjDiAmcuuDQ7hcktDVFtzZ30yxUaF06k9WjJ5x7PF26dbzB8Ul7hg/9Q1TWVQfqf/3zXA29m/uWCLcb6SlqbZAWRWbxRxna4lSHXIl+LdGCjqSjSFcCTS7ghM6VN/JwQf+NaIwT0IA7swAPk2Jr/ujsQ0Hn3cksTNMqVNyoBJu2RS2QkOa8v7+cnDjcv/WmMxoXBHVosMdzrbWGWas3pg5XJCF9wGhS67LDoC9RGJujGEduMQoALAymh0OIFZSj+h6oxYKAPd+zJ2pngAAA=="
        />

        <span className="ml-3 hidden text-xl font-bold tracking-wide text-white md:inline lg:hidden print:inline">
          David Murdoch
        </span>
        <span className="ml-3 inline text-xl font-bold tracking-wide text-white md:hidden print:hidden">
          DSM
        </span>
      </Link>

      <div className={cn(styles.icon, "flex text-white md:hidden")}>
        <DarkModeToggle align="end" />
        <button
          aria-label="Open the navigation menu"
          onClick={onExpandCollapse}
          className="flex items-center justify-center rounded-md p-1 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none"
          aria-controls={id}
          aria-expanded={open}
        >
          <Hamburger className="h-6 w-6" open={open} />
        </button>
      </div>

      <nav aria-label="Primary" className={styles.sections}>
        <Transition show={open}>
          <div
            className={cx(
              "grid transition-[grid-template-rows] duration-150 motion-reduce:transition-none md:hidden",
              "data-[enter]:data-[closed]:grid-rows-[0fr] data-[enter]:grid-rows-[1fr]",
              "data-[leave]:data-[closed]:grid-rows-[0fr] data-[leave]:grid-rows-[1fr]",
            )}
          >
            <div id={id} className="overflow-hidden">
              {children}
            </div>
          </div>
        </Transition>

        <div className="hidden md:block">{children}</div>
      </nav>
    </div>
  );
};

export default Nav;
