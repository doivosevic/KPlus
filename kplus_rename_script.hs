import System.Directory
import System.IO
import System.IO.Unsafe
import Data.List

main :: IO()
main = do
    hSetEncoding stdout utf8
    getCurrentDirectory >>= \curr -> setCurrentDirectory (curr ++ "/dump")
    let names = unsafePerformIO $ getCurrentDirectory >>= getDirectoryContents
    let names2 = filter ((>4) . length) names
    let names_for_renaming = filter (\str -> str!!1=='_' && str!!2=='_' || str!!2=='_' && str!!3=='_') names2
    putStrLn $ unlines names_for_renaming
    let renames1 = filter (\str -> str!!1=='_') names_for_renaming
    let renames2 = filter (\str -> str!!3=='_') names_for_renaming

    mapM_ (uncurry renameFile) $ map rename1 renames1
    mapM_ (uncurry renameFile) $ map rename2 renames2
--    print $ map rename1 renames1
--    putStrLn "\n\n\n\n"
--    print $ map rename2 renames2

rename1 :: String -> (String, String)
rename1 str@(d:_:_:m:_:y1:y2:y3:y4:rest) = (str, y1:y2:y3:y4:'_':'0':m:'_':'0':d:rest)

rename2 :: String -> (String, String)
rename2 str@(d1:d2:_:_:m:_:y1:y2:y3:y4:rest) = (str, y1:y2:y3:y4:'_':'0':m:'_':d1:d2:rest)