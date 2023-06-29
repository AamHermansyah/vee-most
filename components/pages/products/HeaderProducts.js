import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';

function HeaderProducts() {
  return (
    <div>
      <h2 className="text-gray-400">
        Search results for Network Devices - Routers & Components
      </h2>
      <div className="flex flex-col-reverse sm:flex-row gap-x-4 sm:items-center sm:justify-between">
        <button className="flex gap-4 items-center text-yellow-500 font-medium border-b-2 border-yellow-500 mt-2 py-2">
          <span className="text-lg">Products</span>
          <span className="py-1 px-2 rounded-full bg-gray-300 text-black">1278</span>
        </button>
        <div className="w-full flex flex-wrap sm:flex-nowrap gap-x-4 gap-y-2 items-center flex-auto">
          <div className="mt-4 sm:mt-0 flex sm:justify-end gap-1 w-full max-w-[200px]">
            <button className="border-2 border-gray-700 rounded mr-1">
              <FormatListBulletedIcon fontSize="large" />
            </button>
            <button className="text-gray-400">
              <GridViewIcon fontSize="large" />
            </button>
          </div>
          <div className="w-full flex items-center gap-4">
            <select
              id="countries"
              className="min-w-[150px] bg-gray-50 border-2 border-gray-500 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2 rounded-full"
              defaultValue=""
            >
              <option value="" selected>Sort by: Relevant</option>
              <option value="US">Higher</option>
              <option value="CA">Lower</option>
            </select>
            <button className="w-max border-2 border-gray-500 text-sm focus:ring-blue-500 focus:border-blue-500 block sm:w-full py-1.5 px-4 rounded-full">
              Compare
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderProducts