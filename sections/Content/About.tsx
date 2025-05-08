import type { Content } from "@/app/types/graph";
import type { Quote} from "@/app/types/graph";
import { renderers } from "@/components/RichText";
import { RichText } from "@graphcms/rich-text-react-renderer";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Forms from "../Formulier/Form";
// import Forms from '../Formulier/Form'

const subtitle = "Ons verhaal2";
const title = "Samen de lusten en de lasten delen.";

const Quote = (props: Quote) => {
  return (
    <figure className="border-l border-lime-600 pl-8 mt-4">
      <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
        <p>“{props.inhoud}”</p>
      </blockquote>
      <figcaption className="mt-8 flex gap-x-4">
        {props.image ? (
          <Image
            src={props.image.url}
            alt=""
            className="mt-1 h-10 w-10 flex-none rounded-full bg-gray-50"
          />
        ) : null}
        <div className="text-sm leading-6">
          <div className="font-semibold text-gray-900">{props.naam}</div>
          <div className="text-gray-600">{props.titel}</div>
        </div>
      </figcaption>
    </figure>
  );
};

function getElementForType(type?: string) {
  switch (type) {
    case "Quote":
      return Quote;
    case "Formulier":
      return Forms;
    default:
      return null;
  }
}

export default function AboutContent(props: Content) {
  const zijElement = props.zijElement?.__typename;

  const Element = getElementForType(zijElement);

  return (
    <div className="relative isolate overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`mx-auto max-w-2xl ${props.centreren ? 'lg:mx-auto' : 'lg:mx-0'}`}>
          {props.subtitel && (
            <p className="text-lg font-semibold leading-8 tracking-tight text-lime-600">
              {props.subtitel}
            </p>
          )}
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" style={{
            textAlign: props.centreren ? 'center' : 'left'
          }}>
            {props.titel}
          </h1>
          {props.introductie ? <p className="mt-6 text-xl leading-8 font-semibold text-gray-700">
            {props.introductie}
          </p>
          : null}
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          {props.centreren ? (
            <div className="max-w-xl mx-auto text-center leading-7 font-normal text-gray-700 lg:col-span-12">
              <RichText content={props.inhoud.raw} renderers={renderers} />
            </div>
          ) : (
            <>
              <div className="relative order-last lg:col-span-5">
                {/* @ts-expect-error - cannot check the props */}
                {Element ? <Element {...props.zijElement} /> : null}
              </div>
              <div className="max-w-xl text-base leading-7 font-normal text-gray-700 lg:col-span-7">
                <RichText content={props.inhoud.raw} renderers={renderers} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
