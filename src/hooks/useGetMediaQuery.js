import useMediaQuery  from "beautiful-react-hooks/useMediaQuery";

const useGetMediaQuery = () => {
    let mediaQuery;
    const sm = useMediaQuery('(max-width: 600px)');
    const md = useMediaQuery('(max-width: 800px)');

    if (sm) {
        mediaQuery = 'sm'
    } else if (md) {
        mediaQuery = 'md'
    } else {
        mediaQuery = 'lg'
    }

    return mediaQuery;
}

export default useGetMediaQuery;