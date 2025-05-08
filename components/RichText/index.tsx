import Link from "next/link";

const sharedClasses = ""
const bodyClasses = "text-lg text-gray-700"

export const renderers = {
    h1: ({ children }:any) => (<h1 className={`mb-4 text-4xl text-gray-900 md:text-5xl lg:text-5xl  ${sharedClasses}`}>{children}</h1>),
    h2: ({ children }:any) => (<h1 className={`mb-4 text-3xl text-gray-900 md:text-4xl lg:text-4xl ${sharedClasses}`}>{children}</h1>),
    h3: ({ children }:any) => (<h3 className={`text-3xl ${sharedClasses}`}>{children}</h3>),
    h4: ({ children }:any) => (<h4 className={`text-2xl ${sharedClasses}`}>{children}</h4>),
    h5: ({ children }:any) => (<h5 className={`text-xl ${sharedClasses}`}>{children}</h5>),
    h6: ({ children }:any) => (<h6 className={`text-large ${sharedClasses}`}>{children}</h6>),
    p: ({ children }:any) => (<p className={`my-4 text-lg ${bodyClasses} ${sharedClasses}`}>{children}</p>),
    ul: ({ children }:any) => (<ul className={`list-disc list-inside my-4 text-lg ${bodyClasses} ${sharedClasses}`}>{children}</ul>),
    ol: ({ children }:any) => (<ol className={`list-decimal list-inside my-4 text-lg ${bodyClasses} ${sharedClasses}`}>{children}</ol>),
    li: ({ children }:any) => (<li className={`my-2 text-lg ${bodyClasses} ${sharedClasses}`}>{children}</li>),
    code: ({ children }:any) => (<code className={`bg-gray-100 dark:bg-gray-800 rounded-md p-2 text-sm ${sharedClasses}`}>{children}</code>),
    blockquote: ({ children }:any) => (<blockquote className={`border-l-4 border-gray-300 dark:border-gray-700 italic my-4 pl-4 text-lg ${bodyClasses} ${sharedClasses}`}>{children}</blockquote>),
    code_block: ({ children }:any) => (<pre className={`bg-gray-100 dark:bg-gray-800 overflow-y-scroll rounded-md p-2 text-sm ${sharedClasses}`}>{children}</pre>),
    a: ({ children, openInNewTab, href, rel, ...rest }: any) => {
      if (href.match(/^https?:\/\/|^\/\//i)) {
        return (
          <a
            href={href}
            target={openInNewTab ? '_blank' : '_self'}
            rel={rel || 'noopener noreferrer'}
            {...rest}
          >
            {children}
          </a>
        );
      }

      return (
        <Link href={href} {...rest}>
          {children}
        </Link>
      );
    },
}