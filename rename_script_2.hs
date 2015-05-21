import System.Directory
import System.IO
import System.IO.Unsafe
import Data.List
import Data.Char

main :: IO()
main = do
    hSetEncoding stdout utf8
    getCurrentDirectory >>= \curr -> setCurrentDirectory (curr ++ "/dump")
    let names = unsafePerformIO $ getCurrentDirectory >>= getDirectoryContents
    let names2 = filter ((>4) . length) names

    writeDown $ unlines names2

--    mapM_ (uncurry renameFile) $ map rename1 names2
--    print $ map rename1 renames1
--    putStrLn "\n\n\n\n"
--    print $ map rename2 renames2

writeDown names = withFile "productnames_2.txt" WriteMode $ \h -> do
    hSetEncoding h utf8
    hPutStr h names

rename1 :: String -> (String, String)
rename1 str = (str, map (\x -> if not (isAscii x) then '$' else x) str)