import HtmlToReact from 'html-to-react';

export default function parser(htmlInput) {
  const HtmlToReactParser = HtmlToReact.Parser;
  const htmlToReactParser = new HtmlToReactParser();
  return htmlToReactParser.parse(htmlInput);
}
