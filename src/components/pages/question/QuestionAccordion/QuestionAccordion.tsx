/* eslint-disable react/no-array-index-key */
import { Group, Accordion, ThemeIcon } from "@mantine/core";
import type { FC } from "react";
import { QAType } from "@types";

type Props = {
  contents: QAType[];
};

/** @package */
export const QuestionAccordion: FC<Props> = ({ contents }) => {
  return (
    <div className="mb-10">
      <Accordion chevronPosition="right" variant="contained">
        {contents.map((content) => {
          const { answer, question, _id } = content;

          return (
            <Accordion.Item value={_id} key={question}>
              <Accordion.Control>
                <Group noWrap>
                  <ThemeIcon radius="xl" variant="outline" size="sm">
                    ?
                  </ThemeIcon>
                  <p className="text-gray-800 md:text-lg">{question}</p>
                </Group>
              </Accordion.Control>
              <Accordion.Panel>
                <div
                  className="text-sm leading-5 lg:text-base lg:leading-8"
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              </Accordion.Panel>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
};
