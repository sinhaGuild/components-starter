import classnames from "classnames";
import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  subtitle?: string | any;
  description: string;
  backgroundImage?: string | any;
  labels?: string | any;
  tags?: string | any;
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

interface CardTagProps {
  labels: string;
  tags: string;
  className?: string;
}

export const CardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative px-4 -mt-16  ">
      <div className="bg-white p-6 rounded-lg shadow-lg">{children}</div>
    </div>
  );
};

export const CardsTitle = ({ children, className }: CardTitleProps) => {
  return (
    <h4
      className={classnames(
        className,
        "mt-1 py-2 text-xl font-black text-slate-600 leading-tight truncate"
      )}
    >
      {children}
    </h4>
  );
};

export const CardsSubtitle = ({ subtitle }: { subtitle: string }) => {
  return <div className="mt-1 text-gray-600 text-xs uppercase">{subtitle}</div>;
};
export const CardsDescription = ({ description }: { description: string }) => {
  return (
    <div className="mt-4 tracking-tight text-sm text-slate-800 text-justify">
      {description}
    </div>
  );
};

export const CardImage = ({ backgroundImage }: { backgroundImage: string }) => {
  return (
    <img
      src={backgroundImage}
      alt={backgroundImage + Date.now()}
      className="w-full object-cover object-center rounded-lg shadow-md"
    ></img>
  );
};

export const CardTags = ({ labels, tags, className }: CardTagProps) => {
  const labelsList = labels?.split(" ");
  const tagsList = tags?.split(" ");

  return (
    <div className={classnames("flex items-baseline gap-2", className)}>
      {/* List of Labels goes here */}

      {labelsList.length > 0 &&
        labelsList.map((l) => (
          <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
            {l}
          </span>
        ))}

      {/* List of Tags goes there */}

      {tagsList.length > 0 &&
        tagsList.map((t) => (
          <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
            {t != "" && t}
          </div>
        ))}
    </div>
  );
};

//  Card Component

export const Cards = ({
  children,
  subtitle,
  className,
  backgroundImage,
  description,
  labels,
  tags,
}: CardProps) => {
  return (
    <div className={classnames("bg-transparent grid items-center", className)}>
      <CardImage backgroundImage={backgroundImage} />
      <CardLayout>
        <CardTags labels={labels} tags={tags} />
        <CardsTitle>{children}</CardsTitle>
        <CardsSubtitle subtitle={subtitle} />
        <CardsDescription description={description} />
      </CardLayout>
    </div>
  );
};
