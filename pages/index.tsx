import * as React from "react";
import Link from "next/link";

import { components } from "../components";

export default function Home() {
  const componentsKeys = objectKeys(components) as string[];

  return (
    <div className='p-10 space-y-4'>
      {componentsKeys.map((component) => {
        const componentKeys = components[component];
        const props = objectKeys(components[component]) as string[];

        return (
          <div key={component} className='space-y-2'>
            <div className='text-4xl font-semibold text-pink-600'>{capitalizeFirstLetter(component)}</div>

            {props.map((prop) => {
              const propKeys = componentKeys[prop];

              return (
                <div key={prop}>
                  <div className='inline-flex mr-2 font-bold'>{`${capitalizeFirstLetter(prop)}:`}</div>
                  <div className='inline-flex space-x-2'>
                    {propKeys.map((propKey) => {
                      return (
                        <Link key={propKey} href={`/components/${component}?${prop}=${propKey}`}>
                          <a className='text-emarald-600'>{`${propKey}`}</a>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export type Dict<T = any> = Record<string, T>;

export const objectKeys = <T extends Dict>(obj: T) => Object.keys(obj) as unknown as (keyof T)[];

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
