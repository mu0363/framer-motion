/* eslint-disable react/no-array-index-key */
import { Group, Accordion, ThemeIcon } from "@mantine/core";
import type { FC } from "react";

type QuestionContent = {
  id: number;
  image: string;
  label: string;
  description: string;
};

type Props = {
  contents: QuestionContent[];
};

/** @package */
export const QuestionAccordion: FC<Props> = ({ contents }) => {
  return (
    <div className="mb-10">
      <Accordion chevronPosition="right" variant="contained">
        {contents.map((content) => {
          const { id, label, description } = content;

          return (
            <Accordion.Item value={id.toString()} key={label}>
              <Accordion.Control>
                <Group noWrap>
                  <ThemeIcon radius="xl" variant="outline" size="sm">
                    ?
                  </ThemeIcon>
                  <p className="text-gray-800 md:text-lg">{label}</p>
                </Group>
              </Accordion.Control>
              <Accordion.Panel>
                {description.split("\n").map((splitDescription) => (
                  <p key={splitDescription} className="text-sm md:text-base">
                    {splitDescription}
                    <br />
                  </p>
                ))}
              </Accordion.Panel>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
};
