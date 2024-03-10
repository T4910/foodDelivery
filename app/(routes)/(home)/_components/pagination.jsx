import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"

const pagination = ({info: {numberOfPages, currentPage: current, query}}) => {
    const currentPage = parseInt(current, 10) ?? 1;

    const CurrentItem = () => {
        return (
            <PaginationItem>
                <PaginationLink isActive href={`/results?q=${query}&page=${currentPage}`}>{currentPage}</PaginationLink>
            </PaginationItem>
        )
    }
    
    const BeforeCurrent = () => {
        if(currentPage <= 1) return null;
    
        return (
            <>
                {((currentPage - 1) <= 1 && ((currentPage - 2) <= 1)) ? null : <PaginationItem><PaginationEllipsis /></PaginationItem>}
                {(currentPage >= numberOfPages) ? <PaginationItem>
                    <PaginationLink href={`/results?q=${query}&page=${(currentPage - 2)}`}>{(currentPage - 2)}</PaginationLink>
                </PaginationItem> : null}
                <PaginationItem>
                    <PaginationLink href={`/results?q=${query}&page=${(currentPage - 1)}`}>{(currentPage - 1)}</PaginationLink>
                </PaginationItem>
            </>
        )
    }
    
    const AfterCurrent = () => {
        if(currentPage >= numberOfPages) return null;
    
        return (
            <>
                <PaginationItem>
                    <PaginationLink href={`/results?q=${query}&page=${currentPage + 1}`}>{currentPage + 1}</PaginationLink>
                </PaginationItem>
                {(currentPage <= 1) ? <PaginationItem>
                    <PaginationLink href={`/results?q=${query}&page=${currentPage + 2}`}>{currentPage + 2}</PaginationLink>
                </PaginationItem> : null}
                {(currentPage >= numberOfPages || (currentPage + 1) >= numberOfPages) ? null : <PaginationItem><PaginationEllipsis /></PaginationItem>}
            </>
        )
    }

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious 
                        href={(currentPage <= 1) ? '' : `/results?q=${query}&page=${currentPage - 1}`} 
                        disabled={currentPage <= 1}
                    />
                </PaginationItem>
                <BeforeCurrent />
                <CurrentItem />
                <AfterCurrent />
                <PaginationItem>
                    <PaginationNext 
                        href={(currentPage >= numberOfPages) ? '' : `/results?q=${query}&page=${currentPage + 1}`} 
                        disabled={currentPage >= numberOfPages} 
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}

export default pagination