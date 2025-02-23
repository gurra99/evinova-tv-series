import React from "react";
import { Root, Text } from "./empty-list-message.styles";

interface EmptyListMessageProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  text: string;
}

export function EmptyListMessage({ text }: EmptyListMessageProps) {
  return (
    <Root>
      <Text>{text}</Text>
    </Root>
  );
}
