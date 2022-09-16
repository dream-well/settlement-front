import Image from "next/image";
import Layout from "../../components/Layout"
import { useState } from "react";
import TableCard from "../../components/Tables/TableCard";

export default function Variants() {
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [{searchBy, searchText}, setFilter] = useState({});
  const filter = searchBy ? { [searchBy] : searchText } : {};

  const onPrev=() => {
    setPage(Math.max(page-1, 0))
  }

  const onNext = () => {
    const maxPage = Math.ceil((data?.metadata.count ?? 0) / perPage) - 1;
    setPage(Math.min(page+1, maxPage))
  }

  return (
    <Layout title="">
      <div className="flex">
        <div className="bg-white w-2/5 rounded-lg">
          <div className="flex p-5">
            <div>
              <div className="text-[14px] font-[400] text-[rgba(43,43,43,0.54)] font-Roboto">Deposit Wallet Balance:</div>
              <div className="text-[18px] font-[500] tracking-[1px]">12,000,000 GR</div>
            </div>
            <div className="flex flex-1 content-center justify-center center">
              <Image src='/images/circledollar.svg' width="48px" height="48px"/>
            </div>
          </div>
          <div className="px-5 pb-5">
            <button className="text-[#FFC600] rounded border-[#FFC600] border p-2 hover:bg-[#CC9E00] hover:text-[#fff]">Swap to BUSD</button>
          </div>
        </div>

        <div className="bg-white w-3/5 ml-5 rounded-lg">
          <div className="flex p-5">
            <div className="flex-1">
              <div className="text-[14px] font-[400] text-[rgba(43,43,43,0.54)] font-Roboto">Rolling reserve Balance:</div>
              <div className="text-[18px] font-[500] tracking-[1px]">12,000,000 GR</div>
            </div>
            <div className="flex-1">
              <div className="text-[14px] font-[400] text-[rgba(43,43,43,0.54)] font-Roboto">Ready to collect:</div>
              <div className="text-[18px] font-[500] tracking-[1px]">12,000,000 GR</div>
            </div>
            <div className="flex flex-1 content-center justify-center">
              <Image src='/images/QAmessage.svg' width="48px" height="48px" className="center"/>
            </div>
          </div>
          <div className="flex px-5 pb-5">
            <div className="flex-1">
              <button className="text-[#6362E7] rounded border-[#6362E7] border p-2 hover:bg-[#3736E0] hover:text-[#fff]">More Details</button>
            </div>
            <div className="flex-1">
              <button className="text-[#6362E7] rounded border-[#6362E7] border p-2 hover:bg-[#3736E0] hover:text-[#fff]">Harvest</button>
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg mt-5 mb-5">
        <div className="text-[22px] font-[500] tracking-[0.5px] p-5">System Info</div>
        <div className="p-5 pt-0">
          <TableCard
            rows={rows}
            cols={cols}
            className="w-full"
            page={page}
            perPage={perPage}
            onPrev={onPrev}
            onNext={onNext}
            searchParams={searchParams}
            onChangePerPage={(v) => setPerPage(parseInt(v))}
            onSearch={({searchBy, searchText}) => {
              console.log("OnSearch", {searchBy, searchText});
              setFilter({searchBy, searchText})
            }}
            >
          </TableCard>
        </div>
      </div>
    </Layout>
  )
}

const cols = [
  { text: "Items", value: "items"},
  { text: "Fee(%)",value: "fee" },
];

const rows = [
  { items: "Deposits Netbanking", fee: "6%"},
  { items: "Deposits UPI", fee: "5%"},
  { items: "Withdraw Bank Transfer", fee: "2.5%"},
  { items: "Withdraw Crypto", fee: "1%"},
  { items: "Rolling Reserve", fee: "5% (for 6 month)"},
];

const searchParams = [
  {
    text: 'Items',
    value: 'Items'
  },
  {
    text: 'Fee',
    value: 'fee'
  },
]