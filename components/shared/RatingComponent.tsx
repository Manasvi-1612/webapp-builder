import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

import StarIcon from '@mui/icons-material/Star';

const RatingComponent = ({ rating, tag }: { rating: number, tag: string }) => {
  return (
    <section className='flex-center flex-col bg-[#F3F9FF] px-8 py-3 rounded-b-xl'>
      <div className='text-[#074786] text-center flex flex-col gap-2 pb-2'>
        <h1 className="h1-normal">{rating}</h1>
        <p className='p-normal-14'>{tag}</p>
      </div>
      <Stack spacing={1}>
        <Rating sx={{ fontSize: 13 }} defaultValue={4.3} precision={0.1} readOnly emptyIcon={<StarIcon style={{ opacity: 0.8 }} fontSize="inherit" />} />
      </Stack>
    </section>
  )
}

export default RatingComponent
