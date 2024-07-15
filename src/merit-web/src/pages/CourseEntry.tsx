import {
  Box,
  Button,
  Group,
  Select,
  Stack,
  TextInput,
  Text,
  Divider,
  Modal,
  Accordion,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { IconX } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import {
  D_courses,
  createHpMap,
  programs,
  C_courses,
  I_courses,
  F_courses,
  V_courses,
} from "../data/data";
import { useDisclosure } from "@mantine/hooks";

export default function CourseEntry() {
  const [currentProgram, setCurrentProgram] = useState<string[][]>([]);
  const [opened, { open, close }] = useDisclosure(false);
  const [merit, setMerit] = useState(0);

  const hpMap = new Map<String, number>();
  createHpMap(hpMap);

  const form = useForm({});

  const selectProgram = (program: string | null) => {
    switch (program) {
      case "D - Datateknik":
        setCurrentProgram(D_courses);
        break;
      case "C - Infocom":
        setCurrentProgram(C_courses);
        break;
      case "I - Industriell ekonomi":
        setCurrentProgram(I_courses);
        break;
      case "F - Teknisk fysik":
        setCurrentProgram(F_courses);
        break;
      case "V - Väg- och vattenbyggnad":
        setCurrentProgram(V_courses);
        break;
      case null:
        setCurrentProgram([]);
        break;
    }
  };

  const calculateName = (index: number) => {
    switch (index + 1) {
      case 1:
        return "Year 1";
      case 2:
        return "Year 1 - Optional Courses";
      case 3:
        return "Year 2";
      case 4:
        return "Year 2 - Optional Courses";
      case 5:
        return "Year 3";
      case 6:
        return "Year 3 - Optional Courses";
    }
  };

  const calculateMerit = (values: string | any) => {
    let merit = 0;
    let hp = 0;
    if (currentProgram.length == 0) {
      notifications.show({
        message: "Please select a program",
        color: "red",
        title: "Error",
        icon: <IconX />,
        style: {
          width: 400,
          marginTop: 30,
        },
      });
      return;
    }
    for (const key in values) {
      const courseHp = hpMap.get(key) ?? 0;
      hp += courseHp;
      merit += values[key] * courseHp;
    }
    if (hp !== 0) {
      merit = merit / hp;
    }
    setMerit(Math.round(merit * Math.pow(10, 2)) / Math.pow(10, 2));
    open();
  };

  return (
    <Box maw={400} mx="auto" mt="xl">
      <Stack gap="md">
        <Select
          label="Your program"
          placeholder="Pick a program"
          data={programs}
          style={{ marginBottom: 20 }}
          onChange={(value) => selectProgram(value)}
        />
        <form onSubmit={form.onSubmit((values) => calculateMerit(values))}>
          <Group align="flex-end" justify="space-between">
            <Text style={{ fontWeight: "bold" }} size="lg">
              Course
            </Text>
            <Text style={{ fontWeight: "bold" }} size="lg">
              Grade
            </Text>
          </Group>
          <Divider color="blue" mb="lg" size="md" />
          <Accordion>
            {currentProgram.map((year, index) => (
              <>
                {year.length > 0 && (
                  <Accordion.Item value={`year_${index + 1}`}>
                    <Accordion.Control
                      style={{
                        fontSize: 25,
                      }}
                    >
                      {calculateName(index)}
                    </Accordion.Control>
                    <Accordion.Panel>
                      {currentProgram[index].map((course) => (
                        <>
                          <Group align="center" mb="lg" justify="space-between">
                            <Text size="lg">{course}</Text>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                alignItems: "center",
                              }}
                            >
                              <TextInput
                                placeholder="3"
                                key={course}
                                style={{
                                  width: 35,
                                }}
                                {...form.getInputProps(course)}
                              />
                            </div>
                          </Group>
                        </>
                      ))}
                    </Accordion.Panel>
                  </Accordion.Item>
                )}
              </>
            ))}
          </Accordion>
          <Group justify="flex-end" mt="md">
            <Button type="submit" mb="md">
              Calculate merit
            </Button>
          </Group>
        </form>
      </Stack>
      <Modal opened={opened} onClose={close} centered>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <Text
            style={{
              fontSize: 30,
            }}
            mb="xl"
          >
            Your merit is: {merit}
          </Text>
        </div>
      </Modal>
    </Box>
  );
}
