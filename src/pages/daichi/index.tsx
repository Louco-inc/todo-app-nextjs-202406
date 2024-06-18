import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

export default function IndexComponent() {
  return (
    <div className="h-full">
      <header className="h-16 bg-blue p-4  flex justify-between content-center">
        <h1 className="text-3xl text-white font-bold">Todo App</h1>
        <div>
          <button className="w-fit h-8 text-white text-base bg-transparent border border-gray rounded-lg px-4 mx-2">
            kaichi
          </button>
          <button className="w-fit h-8 text-white text-base bg-transparent border border-gray rounded-lg px-4 mx-2">
            daichi
          </button>
          <button className="w-fit h-8 text-white text-base bg-transparent border border-gray rounded-lg px-4 mx-2">
            morishun
          </button>
          <button className="w-fit h-8 text-white text-base bg-transparent border border-gray rounded-lg px-4 mx-2">
            naoya
          </button>
        </div>
      </header>
      <div className="flex">
        <div className="w-1/3 h-full p-8 border-r-2 border-gray">
          <FormControl>
            <FormLabel className="mt-4 text-base font-bold">タスク名</FormLabel>
            <Input type="email" />
            <FormLabel className="mt-4 text-base font-bold">説明</FormLabel>
            <Textarea placeholder="Here is a sample placeholder" />
            <FormLabel className="mt-4 text-base font-bold">期日</FormLabel>
            <Input
              placeholder="Select Date and Time"
              size="md"
              type="datetime-local"
            />
            <FormLabel className="mt-4 text-base font-bold">
              ステータス
            </FormLabel>
            <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </FormControl>
        </div>
        <TableContainer className="w-2/3 mt-8">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th className="text-base">タスク名</Th>
                <Th>ステータス</Th>
                <Th>期日</Th>
                <Th>更新日</Th>
                <Th>編集</Th>
                <Th>削除</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td>25.4</Td>
                <Td>25.4</Td>
                <Td>25.4</Td>
                <Td>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td>30.48</Td>
                <Td>25.4</Td>
                <Td>25.4</Td>
                <Td>25.4</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td>0.91444</Td>
                <Td>25.4</Td>
                <Td>25.4</Td>
                <Td>25.4</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
