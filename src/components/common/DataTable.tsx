import { Card } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ReactNode } from 'react';

export interface ColumnDef<T> {
  key: string;
  header: string;
  width?: string;
  className?: string;
  render?: (item: T) => ReactNode;
  align?: 'left' | 'center' | 'right';
}

interface DataTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  caption?: string;
  title?: string;
  totalCount?: number;
  minTableWidth?: string;
  minHeight?: string;
  getRowKey: (item: T) => string | number;
}

function DataTable<T>({
  data,
  columns,
  caption,
  title,
  totalCount,
  minTableWidth = '700px',
  minHeight = '270px md:min-h-[350px]',
  getRowKey,
}: DataTableProps<T>) {
  return (
    <div className='mt-8'>
      {title && (
        <div className='flex items-center justify-between mb-4 md:mb-6'>
          <h4 className='text-sm font-semibold capitalize sm:text-base md:text-lg'>
            {title}
            {totalCount !== undefined && (
              <span className='text-primary'> {totalCount}</span>
            )}
          </h4>
        </div>
      )}

      <Card className='overflow-hidden overflow-x-auto'>
        <div className={`min-h-[${minHeight}]`}>
          <Table className={`min-w-[${minTableWidth}]`}>
            {caption && (
              <TableCaption className='pb-4 text-xs sm:text-sm'>{caption}</TableCaption>
            )}
            <TableHeader>
              <TableRow className='bg-muted/50 hover:bg-muted/50'>
                {columns.map((column) => (
                  <TableHead
                    key={column.key}
                    className={`text-xs font-semibold sm:text-sm ${column.align === 'center' ? 'text-center' : ''
                      } ${column.width || ''} ${column.className || ''}`}
                  >
                    {column.header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item) => (
                <TableRow
                  key={getRowKey(item)}
                  className='transition-colors hover:bg-muted/30'
                >
                  {columns.map((column) => (
                    <TableCell
                      key={column.key}
                      className={`text-xs sm:text-sm ${column.align === 'center' ? 'text-center' : ''
                        } ${column.className || ''}`}
                    >
                      {column.render
                        ? column.render(item)
                        : (item as any)[column.key]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}

export default DataTable;
