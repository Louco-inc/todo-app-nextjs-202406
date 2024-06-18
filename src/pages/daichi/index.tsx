import {
  FormControl,
  Input,
  Textarea,
  Select,
  Button,
  Table,
  Thead,
  Tbody,
  IconButton,
  TableContainer,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

export default function IndexComponent() {
  return (
    <div className="bg-lightgray">
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
      <div className="h-screen flex">
        <div className="w-1/3 h-full p-8 border-r-2 border-gray">
          <FormControl className="mt-4">
            <label className="text-base font-bold">タスク名</label>
            <div className="bg-white">
              <Input type="email" />
            </div>
          </FormControl>
          <FormControl className="mt-6">
            <label className="text-base font-bold">説明</label>
            <div className="bg-white rounded-lg">
              <Textarea />
            </div>
          </FormControl>
          <FormControl className="mt-6">
            <label className="text-base font-bold">期日</label>
            <div className="bg-white rounded-lg">
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
              />
            </div>
          </FormControl>
          <FormControl className="mt-6">
            <label className="text-base font-bold">ステータス</label>
            <div className="bg-white rounded-lg">
              <Select placeholder="Select option">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </div>
          </FormControl>
          <div className="w-full mt-8 rounded-lg flex justify-center">
            <Button
              type="submit"
              colorScheme="transparent"
              className="w-64 text-white bg-blue"
            >
              保存
            </Button>
          </div>
        </div>
        <TableContainer className="w-2/3 m-8">
          <Table variant="simple">
            <Thead>
              <tr className="text-left">
                <th className="text-base text-black">タスク名</th>
                <th className="text-base text-black">ステータス</th>
                <th className="text-base text-black">期日</th>
                <th className="text-base text-black">更新日</th>
                <th className="text-base text-black">編集</th>
                <th className="text-base text-black">削除</th>
              </tr>
            </Thead>
            <Tbody>
              <tr className="h-16 bg-white shadow">
                <td className="pl-4 text-base text-black font-bold">inches</td>
                <td className="text-base text-black font-bold">
                  millimetres (mm)
                </td>
                <td className="text-base text-black font-bold">2024-06-25</td>
                <td className="text-base text-black font-bold">2024-06-17</td>
                <td>
                  <IconButton
                    variant="unstyled"
                    aria-label="Search database"
                    className="text-base text-black font-bold"
                    icon={<EditIcon />}
                  />
                </td>
                <td>
                  <IconButton
                    variant="unstyled"
                    aria-label="Search database"
                    className="text-base text-black font-bold"
                    icon={<DeleteIcon />}
                  />
                </td>
              </tr>
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
