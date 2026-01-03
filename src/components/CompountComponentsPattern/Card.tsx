const Card = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const CardHeader = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const CardBody = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};
const CardFooter = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const CardImage = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Image = CardImage;

export default Card;
