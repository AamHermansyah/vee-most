import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Typography } from '@mui/material';
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Image from 'next/image';
import productPicture from "../../../assets/vee-store-product.png";

function CardProduct() {
  return (
    <div className="relative p-2 flex items-center">
      <button className="absolute top-2 left-2">
        <FavoriteBorderIcon />
      </button>
      <div className="flex-auto flex gap-2 items-center">
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <div className="relative rounded w-[150px] aspect-video sm:aspect-square">
            <Image src={productPicture} alt="ac power" fill={true} className="object-cover" />
          </div>
          <div className="mt-10">
            <span className="inline-block text-xs px-1.5 py-1 rounded-full border border-gray-700 mb-1">
              Special Price
            </span>
            <h2 className="font-bold uppercase text-lg mb-1">
              Mx480 base bndl Ac power
            </h2>
            <p className="text-sm">
              Juniper Configuratio Juniper MX480 Router Chassis - 8 - Rack - Mountable - 1 Year
            </p>
            <div className="text-sm">
              <span className="uppercase">
                <b>VPN: </b> MX480Base3-Ac
              </span>
              <span className="uppercase">
                <b>SKU: </b> Ry4889
              </span>
            </div>
            <div className="flex items-center gap-2 mr-8 mt-2">
              <Typography className="py-1 px-2 rounded-full bg-green-100 font-bold text-sm text-green-800">
                Direct Ship
              </Typography>
              <Typography className="text-red-700 font-bold text-sm ">
                No returns
              </Typography>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-1 items-center">
            <Checkbox sx={{ margin: 0, padding: 0 }} /> <span className="whitespace-nowrap">Add to compare</span>
          </div>
          <h4 className="text-2xl lg:text-3xl font-bold mt-2">
            $2,945.60
          </h4>
          <div className="text-sm lg:text-base uppercase mt-4">
            <span className="block">
              MSRP $80,514.00
            </span>
            <span className="block -mt-1">
              EXCL TAX
            </span>
          </div>
          <div className="w-full flex gap-2 items-center mt-4">
            <div className="w-max flex border-2 rounded-md border-gray-400">
              <button
                className="px-2 py-1 text-gray-700 bg-gray-100"
              >
                -
              </button>
              <p className="px-2 py-1 border-r-2 border-l-2 border-solid border-slate-100">
                1
              </p>
              <button
                className="px-2 py-1 text-gray-700 bg-gray-100"
              >
                +
              </button>
            </div>
            <button className="w-full px-2 py-1 rounded-md bg-gray-300 text-gray-600 hover:bg-blue-500 hover:text-white transition">
              <AddShoppingCartIcon fontSize="small" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardProduct